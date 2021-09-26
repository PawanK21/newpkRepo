// 1. insert node at begning
// 2. insert node at end
// 3. insert node at middle

#include <stdio.h>
#include <conio.h>
#include <stdlib.h>

struct node {
    int data;
    struct node *next;
};

struct node * insertAtBegning(struct node **);
struct node * insertAtEnd(struct node **);
struct node * insertAtMiddle(struct node *);
struct node * insert(struct node **);
void display(struct node *);
struct node *head = NULL;

int main() {

    int option, val;
    printf("\n choose your option: ");
    scanf("%d", &option);
    // printf("\nEneter the data: ");
    // scanf("%d",&val);
    while(option != 6) {

        

        printf("\n 1. add elements to the linkedlist");
        printf("\n 2. insert at begning of the linkedlist");
        printf("\n 3. insert node at end of the linkedlist");
        printf("\n 4. insert node after the given element");
        printf("\n 5. display linkedlist");
        printf("\n 6. EXIT");

        switch(option) {
            case 1:
                head = insert(&head);
                break;
            case 2:
                head = insertAtBegning(&head);
                break;
            case 3:
                head = insertAtEnd(&head);
                break;
            case 4:
                head = insertAtMiddle(head);
                break;
            case 5:
                display(head);
                break;   
        }
        printf("\n choose your option: ");
        scanf("%d", &option);
    }
    return 0;
}
struct node *insert(struct node ** head) { // append the data 
    // In this function we are assuming list is empty initially
    int val;
    struct node *dummy_node, *new_node;
    printf("\n Enter the value to be added: ");
    scanf("%d", &val);

    if(*head == NULL) {
        dummy_node = (struct node*)malloc(sizeof(struct node));
        dummy_node -> data = val;
        dummy_node -> next = NULL;
        *head = dummy_node;
    }
    else {
        dummy_node = *head;
        while(dummy_node -> next != NULL) {
            dummy_node  = dummy_node -> next;
        }
        new_node = (struct node*)malloc(sizeof(struct node));
        new_node -> data = val;
        new_node -> next = NULL;
        dummy_node -> next = new_node;
    }
    return *head;
}
struct node *insertAtBegning(struct node ** head) {

    struct node * new_node;
    int val;
    printf("\n Enter the value to be added: ");
    scanf("%d", &val);
    new_node = (struct node*)malloc(sizeof(struct node));
    new_node -> data = val;
    new_node -> next = *head;
    *head = new_node;
    return *head;
}

struct node *insertAtEnd(struct node **head) {

    struct node * new_node, *temp;
    int val;
    printf("\n Enter the value to be added: ");
    scanf("%d", &val);

    temp = *head;
    while(temp -> next != NULL){
        temp  = temp -> next;
    }
    new_node = (struct node*)malloc(sizeof(struct node));
    new_node -> data = val;
    temp -> next = new_node;
    new_node -> next = NULL;
    return *head;
}

struct node *insertAtMiddle(struct node *head) {

    struct node * new_node, *temp;
    int val, loc;
    printf("\n Enter the value to be added: ");
    scanf("%d", &val);
    printf("\n Enter the location(index) where the elelment to be added: ");
    scanf("%d", &loc);

    temp = head;
    for(int i =0; i<loc; i++) {
        temp = temp -> next;
        if(temp == NULL) {
            printf("Ther are less than %d elements in the \n", loc);
            return;
        }
    }
    new_node = (struct node*)malloc(sizeof(struct node));
    new_node -> data = val;
    new_node -> next = temp -> next;
    temp -> next = new_node;
    return head;
}

void display(struct node *head) {
    struct node * ptr;
    ptr = head;
    printf("\n Displayed linkedList: ");
    while(ptr != NULL) {
        printf(": %d ", ptr -> data);
        ptr = ptr -> next;
    }
} 