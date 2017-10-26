import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(unmodified: Array<any>, searchText?: string): Array<any> {
    if (!searchText){
      return unmodified
    }
    const lowerSearch = searchText.toLowerCase()
    let modified = unmodified.filter(
      current => 
      current['question'].toLowerCase().includes(lowerSearch) || current['creator'].toLowerCase().includes(lowerSearch)
    )
    return modified
  }

}
