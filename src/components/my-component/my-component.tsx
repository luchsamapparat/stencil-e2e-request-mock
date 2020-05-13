import { Component, h, Prop, State } from "@stencil/core";

@Component({
  tag: "my-component",
})
export class MyComponent {
  @Prop()
  url: string;

  @State()
  example = "Requesting...";

  render() {
    return <code>{JSON.stringify(this.example)}</code>;
  }

  async componentDidLoad() {
    if (!this.url) {
      return;
    }
    const response = await fetch(this.url);
    this.example = await response.json();
  }
}
