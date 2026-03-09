#include<stdio.h>
#include<conio.h>

void main() 
{
    int choice, quantity;
    char more;
    float totalBill = 0;

    do 
    {
        // Display Menu
        printf("\n====== WELCOME TO FOOD BILLING SYSTEM ======\n");
        printf("1. Pizza       - Rs 200\n");
        printf("2. Burger      - Rs 100\n");
        printf("3. Sandwich    - Rs 120\n");
        printf("4. Pasta       - Rs 150\n");
        printf("5. Cold Drink  - Rs 50\n");
        printf("Enter your choice (1-5): ");
        scanf("%d", &choice);

        // Take quantity
        printf("Enter quantity: ");
        scanf("%d", &quantity);

        // Calculate bill using conditional statements
        if(choice == 1)
        {
            totalBill += 200 * quantity;
        }
        else if(choice == 2)
        {
            totalBill += 100 * quantity;
        }
        else if(choice == 3)
        {
            totalBill += 120 * quantity;
        }
        else if(choice == 4)
        {
            totalBill += 150 * quantity;
        }
        else if(choice == 5)
        {
            totalBill += 50 * quantity;
        }
        else
        {
            printf("Invalid Choice!\n");
        }

        // Ask user to order more
        printf("Do you want to order more? (y/n): ");
        scanf(" %c", &more);

    } while(more == 'y' || more == 'Y');

    // Final Bill
    printf("\n===== FINAL BILL =====\n");
    printf("Total Amount = Rs %.2f\n", totalBill);

    printf("\nThank You! Visit Again ??\n");

    getch();
}
