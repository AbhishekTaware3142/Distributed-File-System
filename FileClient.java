package com.example.web;
import java.io.*;
import java.net.*;

public class FileClient {
    private static final String SERVER_ADDRESS = "localhost"; // Server address
    private static final int SERVER_PORT = 12345; // Port to communicate with the server

    public static void main(String[] args) {
        try (Socket socket = new Socket(SERVER_ADDRESS, SERVER_PORT);
             BufferedReader input = new BufferedReader(new InputStreamReader(System.in));
             PrintWriter out = new PrintWriter(socket.getOutputStream(), true);
             BufferedReader in = new BufferedReader(new InputStreamReader(socket.getInputStream()))) {

            System.out.println("Enter 'UPLOAD' to upload a file or 'DOWNLOAD' to retrieve a file:");
            String choice = input.readLine();
            out.println(choice); // Send choice to server

            if (choice.equals("UPLOAD")) {
                // Upload file
                System.out.println("Enter file name to upload:");
                String fileName = input.readLine();
                System.out.println("Enter file content:");
                String fileContent = input.readLine();
                out.println(fileName); // Send file name
                out.println(fileContent); // Send file content
                System.out.println(in.readLine()); // Receive response from server

            } else if (choice.equals("DOWNLOAD")) {
                // Download file
                System.out.println("Enter file name to download:");
                String fileName = input.readLine();
                out.println(fileName); // Send file name to download
                String line;
                while ((line = in.readLine()) != null) {
                    System.out.println(line); // Display file content
                }
            }

        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
