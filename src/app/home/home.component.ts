import {Component, OnInit} from '@angular/core';
import {environment} from '../../environments/environment';
import {ActivatedRoute, Router} from "@angular/router";
import {MatDialog} from "@angular/material";
import {AboutDialogComponent} from "../dialogs/about-dialog/about-dialog.component";
import {NoteDialogComponent} from "../dialogs/note-dialog/note-dialog.component";

declare let particlesJS: any;

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    public version: string = environment.VERSION;

    public isDarkTheme: boolean = false;

    public commonSetOperations = [
        'Accessing an element',
        'Inserting an element',
        'Removing an element'
    ];

    // Array List
    public arrayListSorted = false;
    public arrayListSizeStored = true;
    public kthSelectionAlgorithms = [
        'Random',
        'Median of Medians'
    ];
    public kthSelectionAlgorithm = this.kthSelectionAlgorithms[0];

    // Linked List
    public linkedListHasTailPointer = true;
    public linkedListSizeStored = true;
    public linkedListCircular = false;
    public linkedListTypes = [
        'Singly Linked',
        'Doubly Linked'
    ];
    public linkedListType = this.linkedListTypes[0];

    // Stack
    public stackBackingStructures = [
        'Linked List',
        'Array'
    ];
    public stackBackingStructure = this.stackBackingStructures[0];

    // Queue
    public queueBackingStructures = [
        'Linked List',
        'Array (Circular)'
    ];
    public queueBackingStructure = this.queueBackingStructures[0];

    // Binary Tree
    public isBinarySearchTree = true;
    public bstTypes = [
        'Regular BST',
        'AVL Tree',
        'Red-Black Tree',
        'Splay Tree'
    ];
    public bstType = this.bstTypes[0];
    public binaryTreeSizeStored = true;
    public binaryTreeNodeHeightStored = false;

    // B Tree
    // No specific Variables
    public bTreeSizeStored = true;
    public bTreeNodeHeightStored = false;

    // Hash Table
    public collisionResolutionMethods = [
        'External Chaining',
        'Probing'
    ];
    public collisionResolutionMethod = this.collisionResolutionMethods[1];
    public hashTableExternalStructures = [
        'Linked List',
        'AVL Tree',
        'Red-Black Tree'
    ];
    public hashTableExternalStructure = this.hashTableExternalStructures[0];
    public comparableHashTableData = false;
    public hashTableSizeStored = true;

    // Skip List
    public skipListHeights = [
        'h',
        'n',
        'log(n)'
    ];
    public skipListHeight = this.skipListHeights[0];
    public skipListSizeStored = true;

    // Heap
    public heapTypes = [
        'Binary (Array Backed)',
        'd-ary (Array Backed)',
        'Binomial',
        'Fibonacci'
    ];
    public heapType = this.heapTypes[0];
    public heapOrderings = [
        'Min Heap',
        'Max Heap'
    ];
    public heapOrdering = this.heapOrderings[0];
    public heapSizeStored = true;

    // Disjoint Set
    public useUnionByRank = true;
    public usePathCompression = true;

    // Sorting
    public bubbleSortSwappedFlag = true;
    public cocktailShakerSortSwappedFlag = true;
    public quicksortTypes = [
        'In Place',
        'Out of Place'
    ];
    public quicksortType = this.quicksortTypes[0];
    public quicksortpivotSelectionAlgorithms = [
        'Random',
        'Median of Medians'
    ];
    public quicksortpivotSelectionAlgorithm = this.quicksortpivotSelectionAlgorithms[0];
    public smallRadixSize = true;
    public radixSortTypes = [
        'LSD',
        'MSD'
    ];
    public radixSortType = this.radixSortTypes[0];
    public msdRadixSortTypes = [
        'Out of Place',
        'In Place'
    ];
    public msdRadixSortType = this.msdRadixSortTypes[0];

    // Pattern Matching
    public patternMatchingTargetNums = [
        'All Matches',
        'First Match'
    ];
    public patternMatchingTargetNum = this.patternMatchingTargetNums[0];
    public boyerMooreLastOcurrenceTableSizes = [
        'm',
        's'
    ];
    public boyerMooreLastOcurrenceTableSize = this.boyerMooreLastOcurrenceTableSizes[0];
    public boyerMooreUseGalilOptimization = false;

    // Graphs
    viewGraphNoteDialog(): void {
        const component = this;
        component.dialog.open(NoteDialogComponent, {
            data: {
                'isDarkTheme': component.isDarkTheme,
                'title': 'Note on sets and maps',
                'text': 'The worst case time complexities in this section are given assuming that when the vertices of' +
                    ' the graphs are used as elements of sets or keys in maps, basic operations on these sets or maps' +
                    ' occur in constant time. This can be achieved by implementing the set or map using a hash table' +
                    ' with a perfect hash function, or an array, if it is possible for the vertices to be uniquely' +
                    ' associated with the indices of a predetermined array.'
            }
        });
    };

    public useEEqualsVSquare = false;
    public priorityQueueImplementations = [
        'Binary Heap',
        'Fibonacci Heap',
        'Array/Linked List',
        'Unspecified'
    ];
    public priorityQueueImplementation = this.priorityQueueImplementations[0];


    // Dynamic Programming
    public fibonacciAlgorithms = [
        'Naive Recursion',
        'Dynamic Programming',
        'Recursive Matrix Multiplication',
        'Binet\'s Formula'
    ];
    public fibonacciAlgorithm = this.fibonacciAlgorithms[1];
    public knapsackProblemTypes = [
        'With Repetition',
        'Without Repetition'
    ];
    public knapsackProblemType = this.knapsackProblemTypes[0];
    public matrixChainMultiplicationAlgorithms = [
        'Dynamic Programming',
        'Polygon Partitioning'
    ];
    public matrixChainMultiplicationAlgorithm = this.matrixChainMultiplicationAlgorithms[0];
    public lisAlgorithms = [
        'Dynamic Programming',
        'Binary Search Based Method'
    ];
    public lisAlgorithm = this.lisAlgorithms[0];

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        public dialog: MatDialog,
    ) {
    }

    ngOnInit() {
        const component: HomeComponent = this;
        component.route.queryParams.subscribe(params => {
            component.isDarkTheme = (params['dark-mode'] == 'true');
        });
        // particlesJS.load('particles-js-target', 'assets/json/particles-js-config.json', function () {
        // });
    }

    viewAboutDialog(): void {
        const component = this;
        component.dialog.open(AboutDialogComponent, {
            data: {
                'isDarkTheme': component.isDarkTheme,
                'version': component.version
            }
        });
    };

    onDarkModeChange() {
        this.router.navigate(['/'], {queryParams: {'dark-mode': this.isDarkTheme}});
    }
}
