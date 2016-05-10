/**
 * stupido controller for detailWiki template
 */
class detailWikiController {
  /**
   * init loading data by route params
   */
  constructor($routeParams, wikiGrubber){
    this.title = 'loading'
    this.text = 'loading'
    wikiGrubber.details($routeParams.subject, 
      angular.bind(
        this,
        function(data){
          this.title = data.parse.title
          this.text = data.parse.text["*"]
        }
      )
    )
  }
}

detailWikiController.$inject = [
  '$routeParams',
  'wikiGrubber'
]

export default detailWikiController
