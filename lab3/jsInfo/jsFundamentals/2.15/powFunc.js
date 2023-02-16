function pow(num, pow) {
    let ans = 1;
    for(let i = 0; i < pow; i++) {
        ans *= num;
    }
    return ans;
}