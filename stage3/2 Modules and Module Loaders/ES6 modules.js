//.........  Exporting a Module
//Syntax 1:

//using multiple export keyword
/*
  export component1
  export component2
  ...
  ...
  export componentN 
*/


//Syntax 2:

//using single export keyword

/* 
  export {component1,component2,....,componentN} 
*/

//Default Exports:

/* 
  export default component_name
*/

//////////........ Importing Named Exports:

//import {component1,component2...componentN} from module_name
//import {original_component_name as new_component_name }
//import * as variable_name from module_name

/////////......... Importing Default Exports:

//import any_variable_name from module_name

///             https://www.tutorialspoint.com/es6/es6_modules.htm