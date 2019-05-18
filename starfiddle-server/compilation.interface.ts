interface Compilation 
{ 
    binary ?: Uint8Array;
    messages?:string;
    errors?:string;
};

export default Compilation;