let testObject = {
    key1: 40,
    key2: 491,
    key3: 991,
    key4: 819,
    key5: 138,
    key6: 481
}

function get_value(obj, key)
{
    console.log(obj[key]);
}

function get_sum_value(obj)
{
    accum = 0;
    result = Object.values(obj).reduce((x,y) => accum = x + y);
    console.log(result);
}
