describe("My Word Widget",function(){

    it("Should be able to find the longest word", function(){
    
        const wordCounter = WordCounter("The cat jumped up.");
        const words = wordCounter.getWords();
    
        assert.equal("longest",words[2].type)
    });
    it("Should be able to find the longest and longer word", function(){
    
        const wordCounter = WordCounter("The cat jumped over the blue fence");
        const words = wordCounter.getWords();
    
        assert.equal("longest",words[2].type)
        assert.equal("",words[5].type)
        assert.equal("longer",words[6].type)
    });
    it("Should be able to find more than 1 longer and longest word", function(){
    
        const wordCounter = WordCounter("The black cat jumped over the blue fences");
        const words = wordCounter.getWords();
    
        assert.equal("longer",words[1].type)
        assert.equal("longest",words[3].type)
        assert.equal("",words[6].type)
        assert.equal("longest",words[7].type)
    });
    it("Should be able to show only longer words", function(){
    
        const wordCounter = WordCounter("The black cat jumped over the blue fences");
        const words = wordCounter.getLongerWords();
    
        //check longest words between 3 words
        assert.equal(3, words.length);
        assert.deepEqual("black",words[0].word);
        assert.deepEqual("jumped",words[1].word);
        assert.deepEqual("fences",words[2].word);
    });
    it("Should not return longer words if the is are none", function(){
    
        const wordCounter = WordCounter("The cat jump up");
        const words = wordCounter.getLongerWords();
    
        //should return empty if sentence does not have longer words
        assert.equal(0, words.length);
        assert.deepEqual([],words);
    });
    
    // it("Should be able to display green dot if average higher and an orange dot if average lower from storage.", function(){
    
    // 	const wordCounter = WordCounter("The cat jump up");
    // 	const words = wordCounter.gerWords();
    
    //     assert.equal(0, words.length);
    // 	assert.deepEqual([],words);
    // });
    
    
    });
    
    