import renderer from 'react-test-renderer';
import List from '../src/client/components/List';
const testData = [
    {
        "text": "Food",
        "isCompleted": false,
        "isEditing": false,
        "id": 1
    },
    {
        "text": "Workout",
        "isCompleted": false,
        "isEditing": false,
        "id": 2
    },
    {
        "text": "Cook",
        "isCompleted": false,
        "isEditing": false,
        "id": 3
    }
]
it('changes the class when hovered', () => {

  const component = renderer.create(
    <List></List>,
  );
//   let tree = component.toJSON();
//   expect(tree).toMatchSnapshot();

//   // manually trigger the callback
//   renderer.act(() => {
//     tree.props.onMouseEnter();
//   });
//   // re-rendering
//   tree = component.toJSON();
//   expect(tree).toMatchSnapshot();

//   // manually trigger the callback
//   renderer.act(() => {
//     tree.props.onMouseLeave();
//   });
//   // re-rendering
//   tree = component.toJSON();
//   expect(tree).toMatchSnapshot();
});