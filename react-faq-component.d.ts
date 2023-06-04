declare module 'react-faq-component' {
  import { ComponentType } from 'react';

  export interface FAQProps {
    data: FAQData[];
    styles?: {
      bgColor?: string;
      titleTextColor?: string;
      rowTitleColor?: string;
      rowContentColor?: string;
      rowContentBgColor?: string;
      rowContentTextSize?: string;
      rowContentPadding?: string;
      rowContentBorderRadius?: string;
      rowContentWidth?: string;
      arrowColor?: string;
    };
  }

  export interface FAQData {
    title: string;
    content: string;
  }

  const FAQComponent: ComponentType<FAQProps>;

  export default FAQComponent;
}
