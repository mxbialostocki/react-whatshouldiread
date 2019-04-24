exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('reviews').del()
    .then(function () {
      // Inserts seed entries
      return knex('reviews').insert([
        { id: 1, reviewer_name: 'Bam Bam', review_head: 'Slow Burner in Casablanca', review_body: `‘You have not been yourself lately,” the narrator of Vendela Vida’s new novel says to herself. Or maybe the narrator says it to the character: the story is told entirely in the second person, a decision that is strikingly odd at the start, then quickly becomes part of the alienating texture of this intoxicatingly strange novel. This “you” compels the reader into a very disquieting question from the first page – who am I? Am I this you? – which, as it happens, is the same question the main character orbits throughout. Who is she? Is she you? The limits of self wear away and identity bleeds out, and no one is quite secure in their skin.`, review_isbn: 9780062110916 },
        { id: 2, reviewer_name: 'Webb T', review_head: 'A Response to a McCahon Painting', review_body: `This exquisitely produced hand-bound book was first published in a limited first edition of 150 hand-numbered copies. The first edition has now sold out (though may still be available from some book shops, such as Unity Books) but a second, un-numbered edition is now available. The books are bound with hemp and flax-linen thread, and features a fly-leaf insert of hand-made harakeke (New Zealand flax) paper made by Pakohe Papers in Whanganui.`, review_isbn: 9780994134509 },
        { id: 3, reviewer_name: 'Mxbialostocki', review_head: 'Ever Been Raised in a Seminary?', review_body: `When Patricia was 19, in 2002, she met her future husband Jason on an internet poetry forum. She was living at home – her father, a “loose, lazy pile of carnality”, was happy to spend money on himself but unable to fund his children through college. After months of exchanged messages, Jason drove from Colorado to Missouri finally to meet her. He half-assumed she would be “fifty years old and Latina”; Lockwood in turn was worried that poets “were the sort of people who said ‘lo’ in conversation”. Her parents were naturally wary of the stranger, and Jason was greeted by her father with the screech: “Gimme your license. I got cop friends.” Though an immediate marriage proposal took place – “in the parking lot of … the most matrimonial of all grocery stores” – her mother and father were convinced Tricia was about to drive off with a murderer. It was her sister Mary who pointed out that “We are the ones who are not normal”.`, review_isbn: 9780141984599 },
        { id: 4, reviewer_name: '', review_head: '', review_body: '', review_isbn: 'rowValue3' },
        { id: 5, reviewer_name: '', review_head: '', review_body: '', review_isbn: 'rowValue3' },
        { id: 6, reviewer_name: '', review_head: '', review_body: '', review_isbn: 'rowValue3' },
        { id: 7, reviewer_name: '', review_head: '', review_body: '', review_isbn: 'rowValue3' },
        { id: 8, reviewer_name: '', review_head: '', review_body: '', review_isbn: 'rowValue3' },
        { id: 9, reviewer_name: '', review_head: '', review_body: '', review_isbn: 'rowValue3' },
        { id: 10, reviewer_name: '', review_head: '', review_body: '', review_isbn: 'rowValue3' }
      ])
    })
};
