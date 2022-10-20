import natural from "natural"

export const welcome = (req, res) => {
    res.send("Welcome Natural Api Docs")
}


export const Metaphone = async(req, res) => {
try {
const paramOne = await req.params.paramFirst;
const paramTwo = await req.params.paramSecond;
const metaphone = natural.Metaphone;

if(metaphone.compare(paramOne, paramTwo)) {
    res.status(200).json({
        message: "Success",
        data: `${paramOne} & ${paramTwo} are have same pronunciation`,
    })
}else{
    res.status(200).json({
        message: "Success",
        data: `${paramOne} & ${paramTwo} are have different pronunciation`
    })
}
} catch (error) {
    console.log(error)
}
}

export const Tokenizer = async(req, res) => {
try {
const paramOne = await req.params.paramFirst;
const tokenizer = new natural.WordTokenizer()
const processTokenizer = tokenizer.tokenize(paramOne);

res.status(200).json({
    message: "Success",
    data: processTokenizer,
})
} catch (error) {
    console.log(error)
}
}

export const nounInflectorsPlural = async(req, res) => {
try {
const paramOne = await req.params.paramFirst;
const Inflectors = new natural.NounInflectors();
const pluralrized = Inflectors.pluralrize(paramOne);

res.status(200).json({
   message: "Success",
   data: pluralrized,
});
} catch (error) {
    console.log(error)    
}
}

export const nounInflectorSingular = async(req, res) => {
try {
const paramOne = await req.params.paramFirst;
const Inflectors = new natural.NounInflectors();
const singularized = Inflectors.singularize(paramOne);

res.status(200).json({
    message: "Success",
    data: singularized,
})
} catch (error) {
  console.log(error)  
}
}