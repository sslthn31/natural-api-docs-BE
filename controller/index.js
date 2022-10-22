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
const Inflectors = new natural.NounInflector();
const pluralrized = Inflectors.pluralize(paramOne);

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
const Inflectors = new natural.NounInflector();
const singularized = Inflectors.singularize(paramOne);

res.status(200).json({
    message: "Success",
    data: singularized,
})
} catch (error) {
  console.log(error)  
}
}

export const hammingStringDistance = async(req, res) => {
    try {
    const paramOne = await req.params.paramFirst;
    const paramTwo = await req.params.paramSecond;
    const hamming = natural.HammingDistance(paramOne, paramTwo, false);
    res.status(200).json({
        message: "Success",
        data: hamming
    })
    } catch (error) {
        console.log(error)
    }
}

export const jaroWinklerStringDistance = async(req, res) => {
    try {
    const paramOne = await req.params.paramFirst;
    const paramTwo = await req.params.paramSecond;
    const jaroWinkler = natural.JaroWinklerDistance(paramOne, paramTwo);
    res.status(200).json({
        message: "Success",
        data: jaroWinkler
    })
    } catch (error) {
        console.log(error)
    }
}

export const levenshteinStringDistance = async(req, res) => {
    try {
    const paramOne = req.params.paramFirst;
    const paramTwo = req.params.paramSecond;
    const levenshetein = natural.LevenshteinDistance(paramOne, paramTwo);
    res.status(200).json({
        message: 'Success',
        data: levenshetein
    })
    } catch (error) {
    console.log(error)    
    }
}

export const diceCoefficientStringDistance = async(req, res) => {
    try {
        const paramOne = await req.params.paramFirst;
        const paramTwo = await req.params.paramSecond;
        const diceCoefficient = natural.DiceCoefficient(paramOne, paramTwo);

        res.status(200).json({
            message: "Success",
            data: diceCoefficient
        })
    } catch (error) {
        console.log(error)
    }
}