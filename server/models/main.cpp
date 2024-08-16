#include <bits/stdc++.h>
#define ll long long
using namespace std;



int main() 
{
    int t;
    cin>>t;
    while(t--){
    int n;
    cin >> n;
    vector<ll> vec(n);
    vector<ll> computed(n, 0);
    ll st = 0;
    
    for (int i = 0; i < n; i++) {
        cin >> vec[i];
        st += vec[i];
        computed[i] = st;
    }
    string s;
    cin >> s;
    int i = 0, j = n - 1;
    ll ans = 0;
    while (i < j) {
        while (i < n && s[i] != 'L') i++;
        while (j >= 0 && s[j] != 'R') j--;
        if (i < j) {  
            if (i > 0) {
                ans += computed[j] - computed[i - 1];
            } else {
                ans += computed[j];
            }
            i++;
            j--;
        }
    }
    cout << ans << endl;



  }
    return 0;
}