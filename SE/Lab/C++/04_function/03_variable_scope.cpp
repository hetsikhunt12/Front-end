#include <iostream>
using namespace std;

// Global variable
int x = 100;

void display() {
    int x = 50; // Local variable
    cout << "Local x = " << x << endl;
}

int main() {
    display();

    cout << "Global x = " << x << endl;

    return 0;
}
