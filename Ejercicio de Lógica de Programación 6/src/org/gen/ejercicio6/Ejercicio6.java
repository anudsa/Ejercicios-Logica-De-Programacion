package org.gen.ejercicio6;

import java.util.Scanner;

public class Ejercicio6 {

	public static void main(String[] args) {

		System.out.println("Inserte una palabra: ");
		Scanner scan = new Scanner(System.in);
		String palabra = scan.nextLine();
		scan.close();
		int longitud=palabra.length();
		for(int i=1; i<=longitud;i++) {
			System.out.print(palabra.charAt(longitud-i));
		}
			
	}

}
