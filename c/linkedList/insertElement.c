#include <stdio.h>
#include <stdlib.h>
#include <conio.h>

struct Node {
    int data;
    struct Node *next;
};

struct Node *insert(struct Node *, struct Node *, struct Node *);
void traverse(struct Node *);
struct Node *head = NULL;
int main() {

    
    struct Node *second = NULL;
    struct Node *third = NULL;
    
    printf("Enter the insert the elements to the linkedlist: ");

    head = insert(head, second, third);
    traverse(head);
    return 0;
}

struct Node* insert(struct Node *head, struct Node *second, struct Node *third) {
     //allocate the memory to the pointers 
    head = (struct Node *)malloc(sizeof(struct Node));
    second = (struct Node *)malloc(sizeof(struct Node));
    third = (struct Node *)malloc(sizeof(struct Node));

    // assign first value to  the head node 
    head -> data = 1;
    // link head to first node
    head -> next = second;

    //assign socond value to the firt node and then link second node to the third node
    second -> data = 2;
    second -> next = third;

    //  now put the value to data of the third node and put the null to its next
    third -> data = 3;
    third -> next = NULL;
    return head;
}

void traverse(struct Node *head) {
    struct Node *ptr;
    ptr = head;
    while(ptr != NULL) {
        printf("%d  ", ptr -> data);
        ptr  = ptr -> next;
    }
}