import { Button } from '@/components/Button/Button';
import './App.scss';

export default function App() {
  return (
    <div className="page">
      <div className="mainBlock">
        <Button color="primary">Primary</Button>

        <div className="spacer" />

        <Button color="outline">Outline</Button>

        <div className="spacer" />

        <Button loading>Loading</Button>

        <div className="spacer" />

        <Button circle aria-label="Circle">
          +
        </Button>

        <div className="spacer" />

        <Button cta>CTA Button</Button>
      </div>
    </div>
  );
}
