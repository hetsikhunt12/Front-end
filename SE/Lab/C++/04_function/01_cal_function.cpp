#include <iostream>
using namespace std;

// Functions
int add(int a, int b) {
    return a + b;
}

int sub(int a, int b) {
    return a - b;
}

int mul(int a, int b) {
    return a * b;
}

float divi(int a, int b) {
    return (float)a / b;
}

int main() {
    int x, y, choice;

    cout << "Enter two numbers: ";
    cin >> x >> y;

    cout << "1.Add  2.Subtract  3.Multiply  4.Divide\n";
    cout << "Enter choice: ";
    cin >> choice;

    if (choice == 1)
        cout << "Result = " << add(x, y);
    else if (choice == 2)
        cout << "Result = " << sub(x, y);
    else if (choice == 3)
        cout << "Result = " << mul(x, y);
    else if (choice == 4)
        cout << "Result = " << divi(x, y);
    else
        cout << "Invalid choice";

    return 0;
}
