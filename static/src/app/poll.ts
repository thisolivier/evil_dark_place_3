export class Poll {
    creator: String;
    question: String;
    options: {
        name: String,
        count: Number,
    }[]
}
