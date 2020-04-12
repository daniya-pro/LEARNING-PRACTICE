for (var one = 0; one < 5; one++) {
    console.log("First Loop==>>  ", one)

    for (var two = 0; two < 5; two++) {
        console.log("2nd Loop==>>  ", two)

        for (var three = 0; three < 5; three++) {
            console.log("3rd Loop==>>  ", three)
        }
    }
}
/*
First loop==>> 0
First loop==>> 1 
First loop==>> 2 
First loop==>> 4
2nd loop==>>0
2nd loop==>> 1 
2nd loop==>> 2
2nd loop==>> 3
2nd loop==>> 4
3rd loop==>> 0
3rd loop==>> 1
3rd loop==>> 2
3rnd loop==>>3 
3rd loop==>> 4

*/