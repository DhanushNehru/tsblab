
class RookType {
  public static readonly CASTLE_SHORT: string = 'castle short';
  public static readonly CASTLE_LONG: string = 'castle long';
  public static readonly PROMOTED: string = 'promoted';
  public static readonly SLIDER: string = 'slider';

  public static all(): string[] {
    return [
      RookType.CASTLE_SHORT,
      RookType.CASTLE_LONG,
      RookType.PROMOTED,
      RookType.SLIDER
    ];
  }
}

export default RookType;
