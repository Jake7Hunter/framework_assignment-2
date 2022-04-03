import Family from "./Family";

function Members() {
    return(
        <div>
        <Family name="Jake" age={24} birthday="November 10" favfood="Spaghetti" />
        <Family name="Josh" age={27} birthday="June 12" favfood="Tacos" />
        <Family name="Emily" age={21} birthday="February 23" favfood="Cake" />
        <Family name="Sherry" age={54} birthday="December 25" favfood="Unsalted Peanuts" />
        <Family name="Tim" age={54} birthday="August 1" favfood="Egg Sandwich" />
        <Family name="Molly" age={9} birthday="July 10" favfood="Treats" />
        </div>
    );

}

export default Members;