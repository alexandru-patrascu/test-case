import './App.css';
import { Panel, Block } from './components';

function App() {
  const blockText = 'Lorem ipsum convallis urna dui, quisque et';
  const panelText =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquet lorem non sodales convallis. Nullam pharetra eros nibh, id interdum nunc rhoncus in. Fusce commodo urna dui, quis lobortis nisi varius sed. Ut placerat convallis ante sit amet blandit. Pellentesque et eleifend nisi. Nam commodo, ligula et pellentesque semper, diam velit dignissim eros, elementum congue lacus diam in tellus. Suspendisse eget interdum enim, eget iaculis ex. Nullam vehicula massa quis fringilla faucibus. Pellentesque augue purus, elementum eget diam vel, dignissim lobortis leo. Mauris pretium sodales bibendum. Nullam eget tellus vitae tortor facilisis vehicula non vel ipsum. Aliquam vestibulum nec tortor molestie iaculis.';

  return (
    <>
      <h1 className="mb-18 font-bold">Interview</h1>
      <div className="grid align-center justify-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Block
          color="green"
          width={150}
          height={150}
          studCount={1}
          studGap={20}
          studPosition="top"
        >
          <h5>{blockText}</h5>
        </Block>

        <Block
          color="red"
          width={150}
          height={150}
          studCount={2}
          studGap={20}
          studPosition="right"
        >
          <h5>
            {blockText} {blockText}
          </h5>
        </Block>

        <Block
          color="orange"
          width={150}
          height={150}
          studCount={3}
          studGap={20}
          studPosition="bottom"
        >
          <h5>
            {blockText} {blockText}
          </h5>
        </Block>

        <Block
          color="blue"
          width={150}
          height={150}
          studCount={4}
          studGap={8}
          studPosition="left"
        >
          <h5>
            {blockText} {blockText}
          </h5>
        </Block>
      </div>
      <h2 className="my-10 text-left"> Panel</h2>
      <Panel
        color="#52138E"
        studColor="red"
        text={panelText}
        studGap={10}
        studCount={2}
        studHeight={7}
        studWidth={20}
      />
    </>
  );
}

export default App;
