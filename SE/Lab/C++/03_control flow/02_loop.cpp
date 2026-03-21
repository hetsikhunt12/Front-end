#include <iostream>
using namespace std;

int main() {
    int guess, number = 5;

    cout << "Guess a number between 1 to 100" << endl;

    while (guess != number) {
        cout << "Enter your guess: ";
        cin >> guess;

        if (guess > number)
            cout << "Too High!" << endl;
        else if (guess < number)
            cout << "Too Low!" << endl;
        else
            cout << "Correct Guess!" << endl;
    }

    return 0;
}
