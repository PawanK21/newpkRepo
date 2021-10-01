#include <stdio.h>
#include <conio.h>
#include <stdlib.h>

int binarySearch(int, int[], int);

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

    int ans = binarySearch(val, arr, n);
    if(ans == -1) {
        printf("Not Found");
    }
    else {
        printf(" Element found is %d: ", ans);
    }

    return 0;
}


int binarySearch(int val, int arr[], int n) {
    
    int lo = 0;
    int hi = n - 1;

    while(lo <= hi) {

        int mid = lo + (hi - lo)/2;

        if(arr[mid] == val) {
            return val;
        }
        else if( arr[mid] > val) {
            hi = mid - 1;
        }
        else {
            lo = mid + 1;
        }
    }
    return -1;
}