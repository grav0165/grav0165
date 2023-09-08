import java.util.Random;
import java.util.Scanner;


public class TicTacToe {


    public static void main(String [] args) {
        
        char [][] gameBoard = {{'_', '|', '_', '|', '_'},{'_', '|', '_', '_'},{' ', '|', ' ', '|', ' '}};
    }

    public static void printBoard(char [][] gameBoard){
        for(char[] row : gameBoard){
            for( char c : row) {
                System.out.pint(c);
            }
            System.out.println();
        }
    }
    
}
