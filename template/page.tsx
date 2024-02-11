/**
 * V0ing
 * 画面ファイルテンプレート
 */
import { Button } from "@/components/ui/button"
import { CardContent, Card, CardFooter } from "@/components/ui/card"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Input } from "@/components/ui/input"
import { SelectValue, SelectTrigger, SelectContent, Select } from "@/components/ui/select"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import { RadioGroupItem, RadioGroup } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function Component() {
  return (
      <div className="bg-white p-8">

        {/* ヘッダーサンプル */}
        <header className="flex justify-between items-center border-b pb-4">
          <div>
            <h1 className="text-4xl font-bold">V0ing</h1>
            <p className="text-sm">Template for rapid screen development</p>
          </div>
          <div className="flex items-center space-x-2">
            <Avatar>
              <AvatarImage alt="ログインユーザー" src="/user-avatar.svg" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
          </div>
        </header>
        <main className="p-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* チームメンバーサンプル */}
            <Card className="w-full">
              <CardContent className="p-4">
                <h2 className="text-lg font-semibold mb-4">Team Members</h2>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Avatar>
                      <AvatarImage alt="Sofia Davis" src="/placeholder.svg?height=32&width=32" />
                      <AvatarFallback>SD</AvatarFallback>
                    </Avatar>
                    <div className="ml-2">
                      <p className="font-medium">Sofia Davis</p>
                      <p className="text-sm text-gray-500">me@example.com</p>
                    </div>
                    <Badge variant="secondary">Owner</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* クッキー設定サンプル */}
            <Card className="w-full">
              <CardContent className="p-4">
                <h2 className="text-lg font-semibold mb-4">Cookie Settings</h2>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium">Strictly Necessary</p>
                    <p className="text-sm text-gray-500">
                      These cookies are essential in order to use the website and its features.
                    </p>
                    <Switch id="strictly-necessary" />
                  </div>
                </div>
                <CardFooter className="flex justify-end">
                  <Button variant="outline">Save preferences</Button>
                </CardFooter>
              </CardContent>
            </Card>

            {/* 支払い方法フォームサンプル */}
            <Card className="w-full">
              <CardContent className="p-4">
                <h2 className="text-lg font-semibold mb-4">Payment Method</h2>
                <p className="text-sm mb-4">Add a new payment method to your account.</p>
                <div className="space-y-4">
                  <Input placeholder="Name" />
                  <Input placeholder="City" />
                  <Input placeholder="Card number" />
                  <div className="flex space-x-4">
                    <Select>
                      <SelectTrigger id="month">
                        <SelectValue placeholder="Month" />
                      </SelectTrigger>
                      <SelectContent position="popper" />
                    </Select>
                    <Select>
                      <SelectTrigger id="year">
                        <SelectValue placeholder="Year" />
                      </SelectTrigger>
                      <SelectContent position="popper" />
                    </Select>
                    <Input placeholder="CVC" />
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button>Continue</Button>
              </CardFooter>
            </Card>

            {/* ファイルアップロードフォームサンプル */}
            <Card className="w-full">
              <CardContent className="p-4">
                <h2 className="text-lg font-semibold mb-4">ファイルアップロード</h2>
                <div className="space-y-4">
                  <Input type="file" id="file-upload" name="file-upload" />
                  <div className="flex justify-end">
                    <Button>アップロード</Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* テーブル&ページネーションサンプル */}
            <Card className="w-full lg:col-span-2">
              <CardContent className="p-4">
                <h2 className="text-lg font-bold tracking-wide">検索</h2>
                <div className="space-y-0.5 p-4">  
                  {/* 複数の検索項目を持つ検索フォームの追加 */}
                  <form className="flex gap-4 mb-4">
                    <Input placeholder="請求書番号で検索..." />
                    <Input placeholder="ステータスで検索..." />
                    <Input placeholder="支払方法で検索..." />
                    <Button type="submit">検索</Button>
                  </form>
                </div>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[100px]">Invoice</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Method</TableHead>
                      <TableHead className="text-right">Amount</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {Array.from({ length: 10 }, (_, index) => (
                        <TableRow key={`INV00${index + 1}`}>
                          <TableCell className="font-medium">INV00{index + 1}</TableCell>
                          <TableCell>Paid</TableCell>
                          <TableCell>Credit Card</TableCell>
                          <TableCell className="text-right">$250.00</TableCell>
                        </TableRow>
                    ))}
                  </TableBody>
                </Table>
                <div className="mt-4 flex justify-between items-center">
                  <p className="text-sm text-gray-700">
                    Showing 1 to 10 of 50 results
                  </p>
                  <div className="inline-flex">
                    <Button variant="outline" className="mr-1">1</Button>
                    <Button variant="outline" className="mx-1">2</Button>
                    <Button variant="outline" className="mx-1">3</Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 入力フォームサンプル */}
            <Card className="w-full lg:col-span-2">
              <CardContent className="p-4">
                <div className="space-y-2">
                  <div className="space-y-0.5">
                  <h2 className="text-lg font-semibold mb-4">新規工事案件</h2>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="project-number">案件番号</Label>
                        <Input id="project-number" readOnly value="USN-100" />
                      </div>
                      <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="company">会社名</Label>
                        <Input id="company" placeholder="Enter company name" />
                      </div>
                      <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="project-name">案件名</Label>
                        <Input id="project-name" placeholder="Enter project name" />
                      </div>
                      <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="manager">担当者名</Label>
                        <datalist id="managers">
                          <option value="佐藤健"></option>
                          <option value="鈴木一郎"></option>
                          <option value="高橋恵子"></option>
                        </datalist>
                        <Input id="manager" placeholder="担当者名を入力" list="managers" />
                      </div>
                      <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="email">{`メールアト\u{3099}レス`}</Label>
                        <Input id="email" placeholder="Enter email address" type="email" />
                      </div>
                      <div className="flex flex-col space-y-1.5">
                        <Label>ステータス</Label>
                        <div className="w-full">
                          <RadioGroup defaultValue="planning" className="flex items-center space-x-2">
                            <RadioGroupItem id="status-planning" value="planning" />
                            <Label className="cursor-pointer select-none" htmlFor="status-planning">
                              計画中
                            </Label>
                            <RadioGroupItem id="status-in-progress" value="in-progress" />
                            <Label className="cursor-pointer select-none" htmlFor="status-in-progress">
                              進行中
                            </Label>
                            <RadioGroupItem id="status-completed" value="completed" />
                            <Label className="cursor-pointer select-none" htmlFor="status-completed">
                              完了
                            </Label>
                          </RadioGroup>
                        </div>
                      </div>
                      <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="start-date">受注日</Label>
                        <Input id="start-date" type="date" />
                      </div>
                      <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="start-date">工事開始日</Label>
                        <Input id="start-date" type="date" />
                      </div>
                      <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="completed-date">完成日</Label>
                        <Input id="completed-date" type="date" />
                      </div>
                      <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="address">案件先住所</Label>
                        <Input id="address" placeholder="Enter address" />
                      </div>
                      <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="note">案件詳細・備考</Label>
                        <Textarea className="min-h-[100px]" id="note" placeholder="Enter project details or notes" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end space-x-2">
                  <Button variant="outline">キャンセル</Button>
                  <Button>保存</Button>
                </div>
              </CardContent>
            </Card>

            {/* 詳細画面サンプル */}
            <Card className="w-full lg:col-span-2">
              <CardContent className="p-4">
                <div className="space-y-2">
                  <div className="space-y-0.5">
                    <h2 className="text-lg font-semibold mb-4">工事案件詳細</h2>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex flex-col space-y-1.5">
                        <Label>案件番号</Label>
                        <div id="project-number" className="bg-gray-100 p-2 rounded">USN-100</div>
                      </div>
                      <div className="flex flex-col space-y-1.5">
                        <Label>会社名</Label>
                        <div id="company" className="bg-gray-100 p-2 rounded">USN Corporation</div>
                      </div>
                      <div className="flex flex-col space-y-1.5">
                        <Label>案件名</Label>
                        <div id="project-name" className="bg-gray-100 p-2 rounded">新オフィス建設プロジェクト</div>
                      </div>
                      <div className="flex flex-col space-y-1.5">
                        <Label>担当者名</Label>
                        <div id="manager" className="bg-gray-100 p-2 rounded">佐藤健</div>
                      </div>
                      <div className="flex flex-col space-y-1.5">
                        <Label>{`メールアト\u{3099}レス`}</Label>
                        <div id="email" className="bg-gray-100 p-2 rounded">sato@example.com</div>
                      </div>
                      <div className="flex flex-col space-y-1.5">
                        <Label>ステータス</Label>
                        <div id="status" className="bg-gray-100 p-2 rounded">計画中</div>
                      </div>
                      <div className="flex flex-col space-y-1.5">
                        <Label>受注日</Label>
                        <div id="start-date" className="bg-gray-100 p-2 rounded">2023-01-01</div>
                      </div>
                      <div className="flex flex-col space-y-1.5">
                        <Label>工事開始日</Label>
                        <div id="construction-start-date" className="bg-gray-100 p-2 rounded">2023-02-01</div>
                      </div>
                      <div className="flex flex-col space-y-1.5">
                        <Label>完成日</Label>
                        <div id="completed-date" className="bg-gray-100 p-2 rounded">2023-12-31</div>
                      </div>
                      <div className="flex flex-col space-y-1.5">
                        <Label>案件先住所</Label>
                        <div id="address" className="bg-gray-100 p-2 rounded">東京都千代田区1-1-1</div>
                      </div>
                      <div className="flex flex-col space-y-1.5">
                        <Label>案件詳細・備考</Label>
                        <div id="note" className="bg-gray-100 p-2 rounded min-h-[100px]">オフィスビルの新築工事に関する詳細情報</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end space-x-2">
                  <Button>編集</Button>
                </div>
              </CardContent>
            </Card>

          </div>
        </main>

        {/* フッターサンプル */}
        <footer className="border-t pt-4 mt-8">
          <p className="text-sm">Created by USN-Nishioka - MIT License</p>
        </footer>
      </div>
  )
}

