import java.util.Scanner;

public class PangramChecker {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a sentence: ");
        String input = scanner.nextLine();

        boolean isPangram = isPangram(input);
        if (isPangram) {
            System.out.println("It's a pangram.");
        } else {
            System.out.println("It's not a pangram.");
        }
    }

    public static boolean isPangram(String s) {
        s = s.toLowerCase(); 
        boolean[] letters = new boolean[26]; 

        for (int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);
            if (Character.isLetter(c)) {
                int index = c - 'a';
                letters[index] = true;
            }
        }

       
        for (boolean letter : letters) {
            if (!letter) {
                return false; 
            }
        }

        return true;
    }
}