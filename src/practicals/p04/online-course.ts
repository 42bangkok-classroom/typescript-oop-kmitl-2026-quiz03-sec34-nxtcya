export class OnlineCourse {
    public courseName : string;
    public maxStudent:number;
    private _enrolledStudents:number;
    private _isOpen:boolean;

    constructor(courseName:string,maxStudent:number){
        this.courseName = courseName;
        this.maxStudent = maxStudent;
        this._enrolledStudents = 0
        this._isOpen = true
    }

    private canenroll():boolean{
        return this._isOpen && this._enrolledStudents < this.maxStudent
    }

    public enroll():boolean{
        if(this.canenroll()){
            this._enrolledStudents++
            return true;
        }
        return false;

    }

    public closeCourse():void{
        this._isOpen = false;
    }

    public getAvailableSeats():number{
        return this.maxStudent - this._enrolledStudents
    }

    public getCourseStatus():string{
        return this._isOpen ? "Open" : "Closed"

    }

}



// - **Attributes**:
//   - `courseName` (string): ชื่อคอร์ส (public)
//   - `maxStudents` (number): จำนวนนักเรียนสูงสุด (public)
//   - `enrolledStudents` (number): จำนวนนักเรียนที่ลงทะเบียนแล้ว (private)
//   - `isOpen` (boolean): สถานะของคอร์ส (private)

// - **Constructor**:
//   - รับค่า `courseName` และ `maxStudents` มากำหนดค่าเริ่มต้น
//   - กำหนดค่าเริ่มต้น `enrolledStudents` เป็น 0 จะเพิ่มขึ้นเมื่อมีการลงทะเบียนเรียน
//   - กำหนดค่าเริ่มต้น `isOpen` เป็น true จะปิดเมื่อมีการปิดคอร์สเรียน

// - **Methods**:
//   - `enroll()`: boolean
//     - สำหรับลงทะเบียนเรียน
//     - Return `true` ถ้าลงทะเบียนสำเร็จ, `false` ถ้าลงทะเบียนไม่สำเร็จ
//   - `closeCourse()`: void
//     - สำหรับปิดคอร์สเรียน
//   - `getAvailableSeats()`: number
//     - Return จำนวนที่นั่งที่เหลือ
//   - `getCourseStatus()`: string
//     - Return สถานะของคอร์ส ("Open" หรือ "Closed")
//   - `canEnroll()`: boolean (private)
//     // - เช็คว่าสามารถลงทะเบียนได้หรือไม่