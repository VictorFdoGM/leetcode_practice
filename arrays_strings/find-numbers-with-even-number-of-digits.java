class Solution {
    public int findNumbers(int[] nums) {
        
        int evenNumbersCount = 0;
        for (int i : nums) {
            int divBy10Count = 0;
            
            divBy10Count++;
            while (i >= 10) {
                divBy10Count++;
                i /= 10;
            }

            if (divBy10Count % 2 == 0) {
                evenNumbersCount++;
            }
        }

        return evenNumbersCount;
    }
}