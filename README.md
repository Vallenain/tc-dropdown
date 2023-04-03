# Dropdown

@ngx-tc/dropdown is an Angular custom dropdown library that empowers developers to easily and quickly create fully customizable dropdown menus in their Angular applications. With a simple and flexible API, this library provides a wide range of features and options for creating dropdown menus with custom styling, animations, and advanced functionality.

Built with Angular directives and both static and dynamic components, this library is fast, lightweight, and easily integrates with existing Angular applications. It leverages modern web technologies such as CSS3 and HTML5 to create smooth and responsive user experiences, ensuring that dropdown menus are both visually appealing and easy to use.

One of the standout features of this library is its exceptional flexibility. Developers can easily customize the appearance and behavior of the dropdown menu to match the look and feel of their application. They can also take advantage of advanced features such as keyboard navigation, lazy loading, and multi-select, among others, to create dropdown menus that cater to the specific needs of their users.

Overall, @ngx-tc/dropdown is a powerful tool for creating engaging and customizable dropdown menus in Angular applications. Its comprehensive feature set and ease of integration make it an ideal choice for developers who want to create dropdown menus that not only look great but also offer an exceptional user experience.

## Usage

Install `@ngx-tc/dropdown` in your project:

```
npm install @ngx-tc/dropdown
```

Import `TcDropdownModule` e.g. in your `app.module.ts`:
```typescript
import { TcDropdownModule } from '@ngx-tc/dropdown';

@NgModule({
  imports: [
    ...
    TcDropdownModule
  ],
})
export class AppModule {}
```

Use the `tc-dropdown` component in you app:
```html
<tc-dropdown>
  <a href="#" tc-dropdown-trigger>Dropdown link</a>
  
  <ng-container tc-dropdown-content>
    Dropdown content
  </ng-container>
</tc-dropdown>
```

## Demo
To view a working demo of the library in action, please follow the provided link. The demo will allow you to explore the various components and features included in this library and see how they can be used in your Angular applications.
[http://tc-library.type-code.pro/#/components/dropdowns](http://tc-library.type-code.pro/#/components/dropdowns)
