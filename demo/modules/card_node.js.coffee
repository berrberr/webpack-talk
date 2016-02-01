define(
  [],
  () ->
    # Represents a single card
    class CardNode
      constructor: (rawCardInfo) ->
        @id = rawCardInfo.id

      build: () ->
        el = document.createElement("img")
        el.setAttribute("src",  
          "http://wow.zamimg.com/images/hearthstone/cards/enus/original/" + @id + ".png?4973"
        )

        el
)