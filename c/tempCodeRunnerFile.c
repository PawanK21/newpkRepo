#include <stdio.h>
#include <conio.h>
#include <stdlib.h>

int linearSearch(int, int[], int);

int main() {

    int n, val;
    printf("\n Enter the size of the array");
    scanf("%d",&n);

     int arr[n];
    int i = 0;
    printf("\n Etnter %d elementes from the value to be search: ", n);
    while(i < n) {
        int num;
        scanf("%d", &num);
        arr[i] = num;
        i++;
    }
    printf("Enter the element to be search \n: ");
    scanf("%d", &val);

    int ans = linearSearch(val, arr, n);
    if(ans == -1) {
        printf("Not Found");
    }
    else {
        printf(" Element found is %d: ", ans);
    }

    return 0;
}


int linearSearch(int val, int arr[], int n) {
    
    for(int i = 0; i<n; i++) {
        if(arr[i] == val){
            return val;
        }
    }
    return -1;
}