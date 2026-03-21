#include <iostream>
using namespace std;

// Base class
class Person {
public:
    string name;

    void getName() {
        cout << "Enter name: ";
        cin >> name;
    }
};

// Derived class Student
class Student : public Person {
public:
    int marks;

    void getMarks() {
        cout << "Enter marks: ";
        cin >> marks;
    }

    void displayStudent() {
        cout << "Name: " << name << ", Marks: " << marks << endl;
    }
};

// Derived class Teacher
class Teacher : public Person {
public:
    string subject;

    void getSubject() {
        cout << "Enter subject: ";
        cin >> subject;
    }

    void displayTeacher() {
        cout << "Name: " << name << ", Subject: " << subject << endl;
    }
};

int main() {
    Student s;
    Teacher t;

    cout << "Student Details:\n";
    s.getName();
    s.getMarks();
    s.displayStudent();

    cout << "\nTeacher Details:\n";
    t.getName();
    t.getSubject();
    t.displayTeacher();

    return 0;
}
