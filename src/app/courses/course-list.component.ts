import { Component, OnInit } from '@angular/core';
import { CourseService } from './course.service';
import { Course } from './course';
import { FilterTextComponent } from '../blocks/filter-text';
import { store, filterCourses }  from '../store';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  
  filteredCourses = [];

  constructor(private _courseService: CourseService) {
  }

  filterChanged(searchText: string) {
    console.log('user searched: ', searchText);
    //this.filteredCourses = this._filterService.filter(searchText, ['id', 'name', 'topic'], this.courses);
    store.dispatch(filterCourses(searchText));
  }

  

  // run when subscribe gets updates on state in store
  updateFromState() {
    // initial state
    const allState = store.getState();
    
    this.filteredCourses = allState.filteredCourses;
  }

  ngOnInit() {
    // get initial state
    this.updateFromState();

    // subscribe to changes in state from store then call update 
    store.subscribe(() => {
      this.updateFromState();
    })

    componentHandler.upgradeDom();
  }
}
