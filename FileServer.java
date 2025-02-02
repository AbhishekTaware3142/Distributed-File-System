package com.example.web;
import java.io.*;
import java.net.*;
import java.util.concurrent.*;

public class FileServer {
    private static final int PORT = 12345; // Port to listen for clients

    public static void main(String[] args) {
        ExecutorService pool = Executors.newFixedThreadPool(10); // Handles 10 clients concurrently
        
        try (ServerSocket serverSocket = new ServerSocket(PORT)) {
            System.out.println("Server is listening on port " + PORT);
            while (true) {
                Socket clientSocket = serverSocket.accept(); // Accept new client connection
                pool.execute(new ClientHandler(clientSocket)); // Handle client in a new thread
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}

class ClientHandler implements Runnable {
    private Socket socket;

    public ClientHandler(Socket socket) {
        this.socket = socket;
    }

    @Override
    public void run() {
        try (BufferedReader input = new BufferedReader(new InputStreamReader(socket.getInputStream()));
             PrintWriter output = new PrintWriter(socket.getOutputStream(), true)) {

            String request = input.readLine(); // Read client request (UPLOAD/DOWNLOAD)

            if (request.equals("UPLOAD")) {
                // Handle file upload
                uploadFile(input, output);
            } else if (request.equals("DOWNLOAD")) {
                // Handle file download
                downloadFile(output);
            }

        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private void uploadFile(BufferedReader input, PrintWriter output) throws IOException {
        // Receive file name and content from client
        String fileName = input.readLine();
        String fileContent = input.readLine(); // In real-world, you'd handle large files (byte-by-byte)

        // Save file on server (local storage or distributed file system)
        try (BufferedWriter writer = new BufferedWriter(new FileWriter("server_files/" + fileName))) {
            writer.write(fileContent);
        }

        output.println("File uploaded successfully.");
    }

    private void downloadFile(PrintWriter output) {
        // Send a file to the client (For simplicity, assuming the file exists)
        String fileName = "sample.txt"; // Placeholder for a file name
        try (BufferedReader reader = new BufferedReader(new FileReader("server_files/" + fileName))) {
            String line;
            while ((line = reader.readLine()) != null) {
                output.println(line); // Send file content to client
            }
        } catch (IOException e) {
            output.println("File not found.");
        }
    }
}
