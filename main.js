//List of messages
const messages = ['"Never in the field of human conflict was so much owed by so many to so few."', '"Success is not final, failure is not fatal: it is the courage to continue that counts."', `"There's no honorable way to kill, no gentle way to destroy.There is nothing good in war.Except its ending."`, '"The death of one man is a tragedy. The death of millions is a statistic."', "It is foolish and wrong to mourn the men who died. Rather we should thank God that such men lived.", '"Only the dead have seen the end of war."', '"Death is nothing, but to live defeated and inglorious is to die daily."', `"If we don't end war, war will end us."`, '"War is as much a punishment to the punisher as it is to the sufferer."', '"Better to fight for something than live for nothing."'];

//List of authors from previous messages
const authors = ['Winston Churchill', 'Winston Churchill', 'Abraham Lincoln', 'Joseph Stalin', 'General George S. Patton', '"Only the dead have seen the end of war."', 'Napoleon Bonaparte', 'H. G. Wells', 'Thomas Jefferson', 'General George S. Patton'];

//Number randomizer
const randomNumber = () => {
    return Math.floor(Math.random() * 10);
}

//Main function
const mixedMessages = (arr1, arr2) => {
    let number = randomNumber();
    console.log(`${arr1[number]}\n- ${arr2[number]}`);
}

//Calling main function
mixedMessages(messages, authors);