#include <iostream>
using namespace std;

int main() {
    int a = 10, b = 5;

    // Arithmetic Operators
    cout << "Arithmetic Operators:" << endl;
    cout << "a + b = " << a + b << endl;
    cout << "a - b = " << a - b << endl;
    cout << "a * b = " << a * b << endl;
    cout << "a / b = " << a / b << endl;

    // Relational Operators
    cout << "\nRelational Operators:" << endl;
    cout << "a > b = " << (a > b) << endl;
    cout << "a < b = " << (a < b) << endl;
    cout << "a == b = " << (a == b) << endl;

    // Logical Operators
    cout << "\nLogical Operators:" << endl;
    cout << "(a > 0 && b > 0) = " << (a > 0 && b > 0) << endl;
    cout << "(a > 0 || b < 0) = " << (a > 0 || b < 0) << endl;

    // Bitwise Operators
    cout << "\nBitwise Operators:" << endl;
    cout << "a & b = " << (a & b) << endl;
    cout << "a | b = " << (a | b) << endl;
    cout << "a ^ b = " << (a ^ b) << endl;

    return 0;
}
