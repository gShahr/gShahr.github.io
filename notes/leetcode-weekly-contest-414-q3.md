# LeetCode Weekly Contest 414 - Q3

The problem (which can be found here: <https://leetcode.com/problems/reach-end-of-array-with-max-score/description/>) can be solved via a simple greedy solution. However, having misread the problem as $nums[j]$ instead of $nums[i]$, was unable to solve it.

The problem can be solved in $O(n^2)$ via DP. The code below is given by Copilot (which is expected given that there are many variations of the same problem which can be solved in the same way).

```cpp
int maxScore(vector<int>& nums) {
    int n = nums.size();
    vector<int> dp(n, INT_MIN);
    dp[0] = 0;

    for (int i = 0; i < n; ++i) {
        for (int j = i + 1; j < n; ++j) {
            dp[j] = max(dp[j], dp[i] + (j - i) * nums[j]);
        }
    }

    return dp[n - 1];
}
```

To first time thing that comes to find to try to reduce complexity is to remove the inner for-loop. This problem can be reformulated which can be seen below.

Q queries - each query gives you one linear function in the form ax + b.
For each query, output the linear function that gives the greatest output for x = i.

Q queries - each query gives you one linear function in the form ax + b.
For each query, output the linear function that gives the greatest output for x = i for the first linear function added, x = i-1 for the second, ... , x = 1 for the linear function added in the current time step.
