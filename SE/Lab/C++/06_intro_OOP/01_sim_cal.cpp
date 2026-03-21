#include <iostream>
using namespace std;

class Calculator {
public:
    int a, b;

    void getData() {
        cout << "Enter two numbers: ";
        cin >> a >> b;
    }

    void add() {
        cout << "Addition = " << a + b << endl;
    }

    void sub() {
        cout << "Subtraction = " << a - b << endl;
    }

    void mul() {
        cout << "Multiplication = " << a * b << endl;
    }

    void divi() {
        cout << "Division = " << (float)a / b << endl;
    }
};

int main() {
    Calculator c;

    c.getData();
    c.add();
    c.sub();
    c.mul();
    c.divi();

    return 0;
}
