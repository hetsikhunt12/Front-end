#include<stdio.h>
#include<conio.h>

void main()
{
    int choice, quantity;
    char more;
    float price, amount, total = 0;

    do
    {
        printf("\n------ FOOD MENU ------\n");
        printf("1. Pizza  - 180 Rs\n");
        printf("2. Burger - 100 Rs\n");
        printf("3. Dosa   - 120 Rs\n");
        printf("4. Idli   - 50 Rs\n");

        printf("Enter your choice: ");
        scanf("%d", &choice);

        printf("Enter quantity: ");
        scanf("%d", &quantity);

        // Check item and set price
        if(choice == 1)
            price = 180;
        else if(choice == 2)
            price = 100;
        else if(choice == 3)
            price = 120;
        else if(choice == 4)
            price = 50;
        else
        {
            printf("Invalid choice!\n");
            price = 0;
        }

        amount = price * quantity;
        printf("Amount = %.2f\n", amount);

        total = total + amount;
        printf("Total Bill = %.2f\n", total);

        printf("Do you want to order more? (y/n): ");
        scanf(" %c", &more);

    } while(more == 'y' || more == 'Y');

    printf("\nFinal Bill = %.2f\n", total);

    getch();
}
