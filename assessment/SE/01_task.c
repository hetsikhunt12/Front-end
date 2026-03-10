#include<stdio.h>
#include<conio.h>

void main() 
{
    int choice, quantity;
    char more;
    float bill = 0;

    do {
    // Display Menu
        printf("\n------ FOOD MENU ------\n");
        printf("1. Pizza - 200\n");
        printf("2. Burger - 120\n");
        printf("3. Sandwich - 80\n");
        printf("4. Coffee - 50\n");
        printf("5. Pasta - 150\n");

        printf("Enter your choice: ");
        scanf("%d", &choice);

        printf("Enter quantity: ");
        scanf("%d", &quantity);

        if(choice == 1)
            bill += 200 * quantity;
        else if(choice == 2)
            bill += 120 * quantity;
        else if(choice == 3)
            bill += 80 * quantity;
        else if(choice == 4)
            bill += 50 * quantity;
        else if(choice == 5)
            bill += 150 * quantity;
        else
            printf("Invalid choice!\n");


        printf("Do you want to order more? (y/n): ");
        scanf(" %c", &more);

    } while(more == 'y' || more == 'Y'); 

// Display final bill
    printf("\nYour Final Bill = %.2f\n", bill);

    getch();
}
