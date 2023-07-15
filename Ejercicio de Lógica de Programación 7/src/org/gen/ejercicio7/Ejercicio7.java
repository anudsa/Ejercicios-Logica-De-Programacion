package org.gen.ejercicio7;
import java.time.DayOfWeek;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.time.format.DateTimeParseException;
import java.time.temporal.ChronoUnit;
import java.time.temporal.TemporalAdjusters;
import java.util.Scanner;

public class Ejercicio7 {

	public static void main(String[] args) {
		System.out.println("Inserte un día entre lunes a viernes: ");
		Scanner scan = new Scanner(System.in);
		String day = scan.nextLine();
		System.out.println(day.toLowerCase());
		
		System.out.println("Inserte una hora (hh:mm)");
		String timeText = scan.nextLine();
		scan.close();
		try {
			DateTimeFormatter formato = DateTimeFormatter.ofPattern("HH:mm");
			LocalTime time = LocalTime.parse(timeText, formato);
	        System.out.println("hora " + time);
	        if (day.toLowerCase().equals("viernes") && time.getHour() >= 15) {
	            System.out.println("Ya es fin de semana");
	        } else {
	            LocalDateTime finDeSemana = LocalDateTime.now().with(TemporalAdjusters.next(DayOfWeek.FRIDAY)).withHour(15).withMinute(0).withSecond(0);
	            int diferencia = (int) time.until(finDeSemana, ChronoUnit.MINUTES);
	            
	            if(day.toLowerCase().equals("lunes")) {
	            	diferencia+=(1440*4);
	            }
	            if(day.toLowerCase().equals("martes")) {
	            	diferencia+=1440*3;
	            }
	            if(day.toLowerCase().equals("miercoles")) {
	            	diferencia+=1440*2;
	            }
	            if(day.toLowerCase().equals("jueves")) {
	            	diferencia+=1440;
	            }
	            
	            System.out.println("Faltan " + diferencia + " minutos para el fin de semana.");
	        }
	        
		}catch( DateTimeParseException error){
			System.out.println("Inserte un formato correcto");
		}

	}
}
