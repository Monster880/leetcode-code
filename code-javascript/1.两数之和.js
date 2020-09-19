/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = new Map();
    for(let i=0,len=nums.length;i<len;i++){
        const temp = target - nums[i];
        if(map.has(temp)){
            return [map.get(temp),i];
        }
        map.set(nums[i],i);
    }
};

// 这里注意不要用map = {},因为map[key]=i,key会自动变成字符串