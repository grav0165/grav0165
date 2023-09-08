package snakepackage;

import java.util.ArrayList;
import java.util.Random;

public class Snake {

    static String direction = ""; // UP, RIGHT, DOWN, LEFT
    private int tableRows = 15;
    private int tableColumns = 50;

    private String tableData[][] = new String[tableRows][tableColumns];
    private int fruit[] = new int[2];

    private ArrayList<int[]> playerData = new ArrayList<int[]>();

    private Double tableUpdateTime = (double)(1000/30);
    private int gameSpeed = 1;

    public static void main(String[] args) {

        Snake snake = new Snake();

        snake.start();
    }

    // controls the method to call a function
    static native void controls();

    public static void controlUp(){
        direction = "UP";
    }

    public static void controlRight(){
        direction = "RIGHT";
    }

    public static void controlDown(){
        direction = "DOWN";
    }

    public static void controlLeft(){
        direction = "LEFT";
    }

    public static void controlExit(){
        System.exit(0);
    }

    private void start(){
        resetGame();

        printTable();

        Thread updateGui = new Thread(new Runnable(){
            @Override
            public void run(){
                try{
                    while(true){
                        
                        new ProcessBuilder("zsh", "-c", "clear").inheritIO().start().waitFor();  

                        printTable();

                        Thread.sleep(tableUpdateTime.longValue());

                                        
                        


                    }
                } catch(Exception e) {
                    e.printStackTrace();
                    stopAllbyError(e);
                }
            }
        });

        updateGui.start();
    }

    private void stopAllbyError(Exception e){
        System.exit(1);
    }

    private void printTable(){
        for(int i = 0; i< tableRows; i++){
            for(int j=0; j<tableColumns; j++){
                System.out.print(tableData[i][j]);
            }
            System.out.println("");
        }
    }

    private void resetGame() {
        direction = "RIGHT";
        playerData = new ArrayList<int[]>();

        //player reposition
        int middleColumns = (int) (tableColumns / 2);
        int middleRows = (int) (tableRows / 2);

        playerData.add( new int[]{middleRows, middleColumns});  
        playerData.add( new int[]{middleRows, middleColumns - 1}); 
        playerData.add( new int[]{middleRows, middleColumns - 2}); 
        playerData.add( new int[]{middleRows, middleColumns - 3}); 
        
        createRandomFruit();

        // fill with a space
        for (int i = 0; i<tableRows; i++){
            for(int j=0; j<tableColumns - 1; j++){
                tableData[i][j] = " ";
            }
        }

        // fill right and left walls
        for(int i = 0; i<tableColumns; i++){
            tableData[0][i] = "|";
            tableData[tableRows - 1][i] = "|";
        }

        //Fill top and bottom walls
        for(int i = 0; i < tableRows; i++){
            tableData[i][0] = "||";
            tableData[i][tableColumns - 1] = "||";
        }

        insertPlayer();
        insertFruit();

    }

    private void insertFruit(){
        tableData[fruit[0]][fruit[1]] = "Q";
    }

    private void insertPlayer(){
        try{
            for(int [] pos : playerData){
                tableData[pos[0]][pos[1]] = "#";
            }

            int [] head = playerData.get(0);
            tableData[head[0]][head[1]] = "@";
        } catch (ArrayIndexOutOfBoundsException aiobe) {
            aiobe.printStackTrace();
            resetGame();
        }
    }

    private void createRandomFruit(){
        Random random = new Random();

        int x = random.nextInt(tableColumns - 2) + 1;
        int y = random.nextInt(tableRows - 2) + 1;

        for(int [] body : playerData){
            if(body[0] == y && body[1] == x){
                createRandomFruit();
                return;
            }
        }
        fruit[0] = y;
        fruit[1] = x;
    }





}
