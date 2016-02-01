define(
  [
    "../data/cards.collectible.json"
  ],
  (
    cards
  ) ->
    class CardSearcher
      constructor: ->
        @cards = cards

      search: (text) ->
        text = text.toLowerCase()

        @cards.filter((card) ->
          card.name.toLowerCase().includes(text) ||
            (card.race && card.race.toLowerCase().includes(text)) ||
            (card.text && card.text.toLowerCase().includes(text))
        )
)