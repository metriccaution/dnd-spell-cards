import * as React from "react";
import SpellList, { SpellListProps } from "./spell-list";

/**
 * An extension of SpellListProps - Extends it with configuration for anumation.
 */
export interface SmoothingSpellProps extends SpellListProps {
  /**
   * How many items to add at once.
   */
  animationBatchSize: number;
}

export interface SmoothingSpellState {
  /**
   * How many spells are currently being shown
   */
  showingCount: number;
}

/**
 * Handles not dumping thousands of items on the DOM when searching, especially
 * for short spell searches. This works by showing a subset of spells on search,
 * and adding more over time, attempting to prevent blocking rendering.
 */
export default class SmoothingSpellList extends React.Component<
  SmoothingSpellProps,
  SmoothingSpellState
> {
  constructor(props: SmoothingSpellProps) {
    super(props);

    this.state = {
      showingCount: props.animationBatchSize
    };
  }

  /**
   * Kick off the list size incrementing.
   */
  public componentWillMount() {
    this.addLoop();
  }

  /**
   * Reset the size of the rendered list when updating props.
   */
  public componentWillReceiveProps(newProps: SmoothingSpellProps) {
    if (newProps.spellList.length !== this.props.spellList.length) {
      this.setState(
        {
          showingCount: newProps.animationBatchSize
        },
        () => this.addLoop()
      );
    }
  }

  /**
   * Increment the size of the rendered list, and then if everything's not being
   * showed, queue another update when the browser is ready.
   */
  public addLoop() {
    this.setState({
      showingCount: this.state.showingCount + this.props.animationBatchSize
    });

    if (this.state.showingCount < this.props.spellList.length) {
      requestAnimationFrame(() => this.addLoop());
    }
  }

  public render() {
    return (
      <SpellList
        {...this.props}
        spellList={this.props.spellList.slice(0, this.state.showingCount)}
      />
    );
  }
}
