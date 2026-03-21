#include <iostream>
using namespace std;

class BankAccount {
private:
    float balance;

public:
    void setBalance(float b) {
        balance = b;
    }

    void deposit(float amount) {
        balance += amount;
        cout << "After Deposit Balance = " << balance << endl;
    }

    void withdraw(float amount) {
        if (amount <= balance) {
            balance -= amount;
            cout << "After Withdraw Balance = " << balance << endl;
        } else {
            cout << "Insufficient Balance!" << endl;
        }
    }
};

int main() {
    BankAccount b;

    b.setBalance(1000);
    b.deposit(500);
    b.withdraw(300);

    return 0;
}
