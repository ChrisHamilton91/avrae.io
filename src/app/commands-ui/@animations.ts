import {
  animate,
  AnimationMetadata,
  state,
  style,
  transition,
  trigger,
} from "@angular/animations";

export const fadeInAnimation: AnimationMetadata[] = [
  state("true", style({ opacity: 1 })),
  state("false", style({})),
  transition("* => true", [style({ opacity: 0 }), animate("0.15s ease-in")]),
];

export const fadeOutAnimation: AnimationMetadata[] = [
  state("true", style({ opacity: 0 })),
  state("false", style({})),
  transition("* => true", animate("0.15s ease-out")),
];

const grown = style({
  flexBasis: "36px",
  marginTop: "1px",
  marginBottom: "1px",
});

export const dropDownAnimation: AnimationMetadata[] = [
  state("true", grown),
  state("false", style({})),
  transition("* => true", animate("0.2s ease-in")),
];

const shrunk = style({
  flexBasis: 0,
  marginTop: "-2px",
  marginBottom: "-2px",
});

export const shrinkUpAnimation: AnimationMetadata[] = [
  state("true", shrunk),
  state("false", style({})),
  transition("* => true", animate("0.15s ease-out")),
];

export const showAnimation: AnimationMetadata[] = [
  state("true", style({ opacity: 1, visibility: "visible" })),
  state("false", style({})),
  transition("* => true", animate("0.15s ease-in")),
];

export const hideAnimation: AnimationMetadata[] = [
  state("true", style({ opacity: 0, visibility: "hidden" })),
  state("false", style({})),
  transition("* => true", animate("0.15s ease-out")),
];
